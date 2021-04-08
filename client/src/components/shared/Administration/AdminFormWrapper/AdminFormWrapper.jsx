function AdminFormWrapper({ title }) {
    return (
        <div className="row space-top">
            <div className="col-md-12">
                <h1 className="cursive-font-style p-2">{title}</h1>
                <hr />
            </div>
        </div>);
}

export default AdminFormWrapper;