import Loading from "../../components/Loading";
import { useGetEntriesQuery } from "../../features/entry/entryApi";

function Api() {
  const { data, isLoading, isError, error, refetch } = useGetEntriesQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    },
  );

  const openDeleteModal = (entryId: string) => {
    // Logic to open delete modal for the entry with the given entryId
    console.log(`Open delete modal for entry with ID: ${entryId}`);
  }

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
          {
            data && data.success && data!.value!.map((entry) => (

              <tr key={entry.id} className="hover:bg-base-300">
                <th>{entry.firstName}</th>
                <td>{entry.lastName}</td>
                <td>{entry.phoneNumber}</td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-error ml-2" onClick={() => openDeleteModal(entry.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))

          }
        </tbody>
      </table>
    </div>
  );
}

export default Api;
