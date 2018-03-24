import p5 from 'p5';

export const Agent =(p5)=>{
  const c = p5.color(255, 204, 0)
  return c
  // p5.setup = ()=>{

  // };
  // p5.draw = ()=>{
  //   console.log("agent");
  // }
}






// export const Agent = function() {
//     this.vector = p5.createVector(p5.random(p5.width), p5.random(p5.height));
//     this.vectorOld = this.vector.copy();
//     this.stepSize = p5.random(1, 5);
//     this.isOutside = false;
//     this.angle;
//   }
  
//   Agent.prototype.update = function(strokeWidth) {
//     this.vector.x += p5.cos(this.angle) * this.stepSize;
//     this.vector.y += p5.sin(this.angle) * this.stepSize;
//     this.isOutside = this.vector.x < 0 || this.vector.x > p5.width || this.vector.y < 0 || this.vector.y > p5.height;
//     if (this.isOutside) {
//       this.vector.set(p5.random(p5.width), p5.random(p5.height));
//       this.vectorOld = this.vector.copy();
//     }
//     p5.strokeWeight(strokeWidth * this.stepSize);
//     p5.line(this.vectorOld.x, this.vectorOld.y, this.vector.x, this.vector.y);
//     this.vectorOld = this.vector.copy();
//     this.isOutside = false;
//   }
  
//   Agent.prototype.update1 = function(noiseScale, noiseStrength, strokeWidth) {
//     this.angle = p5.noise(this.vector.x / noiseScale, this.vector.y / noiseScale) * noiseStrength;
//     this.update(strokeWidth);
//   }
  
//   Agent.prototype.update2 = function(noiseScale, noiseStrength, strokeWidth) {
//     this.angle = p5.noise(this.vector.x / noiseScale, this.vector.y / noiseScale) * 24;
//     this.angle = (this.angle - p5.floor(this.angle)) * noiseStrength;
//     this.update(strokeWidth);
//   }
  