function UserTableHead({ isAuthor }) {
    return (
        <thead>
            <tr>
                <th>Title</th>
                <th>Picture</th>
                <th>Category</th>
                {isAuthor
                    ? <th>Author</th>
                    : <th></th>}
                {isAuthor
                    ? null
                    : <th></th>}
                <th></th>
            </tr>
        </thead>);
}

export default UserTableHead;