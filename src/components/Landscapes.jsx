import landscapesApi from "../store/landscapesApi";
const Landscapes = () => {
  const { data, isLoading } = landscapesApi.useGetAllLandscapesQuery();
  const [deleteLandscape] = landscapesApi.useDeleteLandscapeMutation();
  const [incrementLike] = landscapesApi.useIncrementLikeMutation();

  return (
    <>
      <h1>Using landscapesApi</h1>
      <section className="landscapes">
        {isLoading && <p>Loading....</p>}
        {data &&
          data.map(({ id, name, image, likes }) => {
            return (
              <aside key={id}>
                <img src={"/" + image} alt={name} />
                <p>
                  {name} - {likes} likes
                </p>
                <button onClick={() => incrementLike({ id, likes })}>👍</button>
                <button onClick={() => deleteLandscape(id)}>❌</button>
              </aside>
            );
          })}
      </section>
    </>
  );
};

export default Landscapes;
