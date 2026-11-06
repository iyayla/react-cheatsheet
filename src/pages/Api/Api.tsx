import { useState } from "react";
import Loading from "../../components/Loading";
import { useAddEntryMutation, useDeleteEntriesMutation, useGetEntriesQuery } from "../../features/entry/entryApi";
import DeleteForm from "./DeleteForm";
import type { CreateEntryRequest, DeleteEntryResponse, UpsertEntryResponse } from "../../types/entryResponse";
import AddForm from "./AddForm";

function Api() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading, isError, error, refetch } = useGetEntriesQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    },
  );


  const [deleteContact, { isLoading: isDeleting }] =
        useDeleteEntriesMutation();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletemeEntryId, setDeleteEntryId] = useState<string | null>(null);
  const [deleteData, setDeleteData] = useState<DeleteEntryResponse | null>(null);

  const openDeleteModal = (entryId: string) => {
    setDeleteDialogOpen(true);
    setDeleteEntryId(entryId);
  }

  const closeDeleteModal = () => {
    setDeleteDialogOpen(false);
    setDeleteEntryId(null);
    setDeleteData(null);
  }

  const handleDelete = async (id: string) => {

        try {
            const result = await deleteContact(id).unwrap();
            setDeleteData(result);
            if(result.success) {
              closeDeleteModal();
            }

            // refetch(); // Optionally refetch the entries after deletion

        } catch (err) {
            console.error("Delete failed:", err);
        }
    };



  const [addEntry, { isLoading: isAdding }] =
        useAddEntryMutation();
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [addData, setAddData] = useState<UpsertEntryResponse | null>(null);

  const openAddModal = () => {
    setAddDialogOpen(true);
  }

  const closeAddModal = () => {
    setAddDialogOpen(false);
    setAddData(null);
  }

  const handleAdd = async (addDataRequest: CreateEntryRequest) => {

        try {
            const result = await addEntry(addDataRequest).unwrap();
            setAddData(result);
            if(result.success) {
              closeAddModal();
            }
        } catch (err) {
            console.error("Add failed:", err);
        }
    };

  if (isLoading) return <Loading />;

  if (isError) {
    return <p>Error loading Phone Book Entries. Please try again later</p>;
  }

  return (
    <div className="overflow-x-auto">
      {deleteDialogOpen && (
        <dialog id="deleteModal" className="modal modal-open">
          <div className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeDeleteModal}>
              ✕
            </button>
            <DeleteForm
              initialValues={{ id: deletemeEntryId || "" }}
              isLoading={isDeleting}
              onSubmit={(values) => handleDelete(values.id)} 
              deleteData={deleteData}
              />
          </div>
        </dialog>
      )}
      
      
      {addDialogOpen && (
        <dialog id="deleteModal" className="modal modal-open">
          <div className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeAddModal}>
              ✕
            </button>
            <AddForm
              isLoading={isAdding}
              onSubmit={(values) => handleAdd(values)} 
              addData={addData}
              />
          </div>
        </dialog>
      )}




      <div className="text-right font-bold m-2">
        <button className="btn btn-xl" onClick={openAddModal}>
          Add New
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.success &&
            data!.value!.map((entry) => (
              <tr key={entry.id} className="hover:bg-base-300">
                <th>{entry.firstName}</th>
                <td>{entry.lastName}</td>
                <td>{entry.phoneNumber}</td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button
                    className="btn btn-sm btn-error ml-2"
                    onClick={() => openDeleteModal(entry.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Api;
