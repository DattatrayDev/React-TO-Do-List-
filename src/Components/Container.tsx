type containerProps={
    styles: React.CSSProperties
}
export const Container=(props: containerProps)=>{
    return (
        <div style={props.styles}>
                text content goes here
        </div>
    )
}