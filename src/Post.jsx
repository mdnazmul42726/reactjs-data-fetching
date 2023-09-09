export default function Post({ post }) {
    const { id, title, body } = post;
    return (
        <div className="">
            <h3>ID {id}</h3>
            <h2>Title: {title}</h2>
            <p>Body: {body}</p>

        </div>
    )
}