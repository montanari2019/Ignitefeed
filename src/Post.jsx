export function Post(props) {

    console.log(props);
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.comment}</p>
        </div>
    )
}