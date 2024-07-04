

const layout = ({ details, recomendedCard }) => {
  return (
    <div>
      <section className="mb-10">{details}</section>
      <hr/>
      {/* <h1 className="text-center font-bold text-3xl">Recommended movies..</h1> */}
      <section>{recomendedCard}</section>
    </div>
  );
};

export default layout;
