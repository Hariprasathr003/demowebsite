export default function Registerdetails({ storedata, setStoredata }) {
  function handleDelete(currentIndex) {
    const deleteOneItem = storedata.filter((val) => val.id !== currentIndex);
    setStoredata(deleteOneItem);
  }

  function handleDeleteAll() {
    setStoredata([]);
  }

  return (
    <>
      <div >
        <h1 >
          Create Register Details
        </h1>

        {storedata.length === 0 && (
          <p >No Register available.</p>
        )}

        {storedata.map((val) => {
          return (
            <ul
              key={val.id}
   
            >
              <li>Name: {val.name}</li>
              <li>Phone Number: {val.phone}</li>
              <li>Email: {val.mail}</li>
              <li>Address:{val.Address}</li>
              <button
                onClick={() => handleDelete(val.id)}
             
              >
                Delete
              </button>
            </ul>
          );
        })}
      </div>

      <div >
        <button
          onClick={handleDeleteAll}
        >
          Delete All
        </button>
      </div>
    </>
  );
}
