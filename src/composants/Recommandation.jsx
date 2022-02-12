function Recommandation(){
    const currentMonth=new Date().getMonth()
    const isSpring=currentMonth>=2 &&currentMonth<=5 
    if (!isSpring){
        return <div>ce n'est le moment de rempoter</div>
    }
    return <div>c'est le printemps rempotez</div>

}
export default Recommandation
