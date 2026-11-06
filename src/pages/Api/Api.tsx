import { useState } from "react";
import Loading from "../../components/Loading";
import { useDeleteEntriesMutation, useGetEntriesQuery } from "../../features/entry/entryApi";
import DeleteForm from "./DeleteForm";
import type { DeleteEntryResponse } from "../../types/entryResponse";

function Api() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading, isError, error, refetch } = useGetEntriesQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    },
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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


  const handleAddNew = () => {
    // Logic to add a new entry
    console.log("Add New button clicked");
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

      <div className="text-right font-bold m-2">
        <button className="btn btn-xl" onClick={handleAddNew}>
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
