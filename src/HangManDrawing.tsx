const HEAD =(<div style ={{
    width : '50px',
    height: '50px',
    borderRadius: '100%',
    border: '10px solid black',
    position:"absolute",
    top:'50px',
    right:'-30px'
}}/>)
const BODY =(<div style ={{
    width : '10px',
    height: '100px',
    background:'Black',
    position:"absolute",
    top:'120px',
    right:'0px'
}}/>)
const RIGHT_ARM =(<div style ={{
    width : '100px',
    height: '10px',
    background:'Black',
    position:"absolute",
    top:'125px',
    right:'-90px',
    rotate: '-30deg',
    transformOrigin:'left_bottom'
}}/>)
const LEFT_ARM =(<div style ={{
    width : '100px',
    height: '10px',
    background:'Black',
    position:"absolute",
    top:'125px',
    right:'0px',
    rotate: '30deg',
    transformOrigin:'left_bottom'
}}/>)
const RIGHT_LEG =(<div style ={{
    width : '125px',
    height: '10px',
    background:'Black',
    position:"absolute",
    top:'270px',
    right:'-80px',
    rotate: '70deg',
    transformOrigin:'left_bottom'
}}/>)
const LEFT_LEG =(<div style ={{
    width : '125px',
    height: '10px',
    background:'Black',
    position:"absolute",
    top:'270px',
    right:'-40px',
    rotate: '-75deg',
    transformOrigin:'left_bottom'
}}/>)
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
}
export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return <div style={{ position: 'relative', }}>
         {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{ height: '50px', width: '10px', background: 'black',position: 'absolute',top: '0px',right: '0px' }} />
        <div style={{ height: '10px', width: '250px', background: 'black', marginLeft: '120px' }} />
        <div style={{ height: '400px', width: '10px', background: 'black', marginLeft: '120px' }} />{/* margin = (W250/2) - (W10/2) */}
        <div style={{ height: '10px', width: '250px', background: 'Black', }} />
    </div>
}
