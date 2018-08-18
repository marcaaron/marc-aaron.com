class HeaderConfig {
  constructor(name, role){
    this.name = name.split("");
    this.role = role.split("");
  }

  transX = Array.from(
    {length:31},
    () => Math.random() < 0.5 ? Math.abs(Math.floor(Math.random() * Math.floor(400))) : -Math.abs(Math.floor(Math.random() * Math.floor(400)))
  );

  transY = Array.from(
    {length:31},
    ()=>Math.random()<0.5 ? Math.abs(Math.floor(Math.random() * Math.floor(400))) : -Math.abs(Math.floor(Math.random() * Math.floor(400)))
  );

  angles = Array.from(
    {length:31},
    ()=>Math.random()<0.5 ? Math.abs(Math.floor(Math.random() * Math.floor(360))) : -Math.abs(Math.floor(Math.random() * Math.floor(360)))
  );

  scale = Array.from({length:31},()=>Math.random());

  killStyles = this.transX.map((distance,index)=>{
  	return {opacity:'0',transform:`scale(${this.scale[index]},${this.scale[index]}) rotate(${this.angles[index]}deg) translate(${this.transX[index]}px,${this.transY[index]}px)`}
  });

  baseStyle = { }
}

export default new HeaderConfig("Marc Glasser", "Web Developer");
