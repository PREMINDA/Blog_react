const Create = () => {
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title</label>
        <input type="text" required />
        <label>Blog</label>
        <textarea required />
        <label>Blog author:</label>
        <select>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
      </form>
      <button>Add Blog</button>
    </div>
  );
};

export default Create;
