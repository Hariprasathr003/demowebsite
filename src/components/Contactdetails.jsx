export default function Contactdetails({ storedata, setStoredata }) {
  function handleDelete(currentIndex) {
    const deleteOneItem = storedata.filter((val) => val.id !== currentIndex);
    setStoredata(deleteOneItem);
  }

  function handleDeleteAll() {
    setStoredata([]);
  }

  return (
    <>
      <div>
        <h1>Create Contact Details</h1>

        {storedata.length === 0 && <p>No contacts available.</p>}

        {storedata.map((val) => {
          return (
            <ul key={val.id}>
              <li>Name: {val.name}</li>
              <li>Email: {val.mail}</li>
              <li>Message: {val.message}</li>
              <li>Phone:{val.phone}</li>
              <button onClick={() => handleDelete(val.id)} className=" ">
                Delete
              </button>
            </ul>
          );
        })}
      </div>

      <div>
        <button onClick={handleDeleteAll}>Delete All</button>
      </div>
    </>
  );
}
