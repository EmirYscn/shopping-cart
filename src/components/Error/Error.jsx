function Error({ error }) {
  document.title = "Error";
  return <h1>{error}</h1>;
}

export default Error;
