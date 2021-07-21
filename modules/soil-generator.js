// ---------------------------------------------------------
//                          Imports 
// ---------------------------------------------------------
import { moduleName, moduleTag } from "./constants.js";


// ---------------------------------------------------------
//                          Main 
// ---------------------------------------------------------
export class SoilGenerator {

    /**
     * 
     * @param {*} options 
     */
    constructor(options={}) {
      this.options = options;
      this.props = null;
      this.name = null;
    }

    /**
     * 
     * @returns 
     */
    randomPoint(){
      let point = [];
      point[0] = Math.floor(Math.random() * 100) + 1;
      point[1] = Math.floor(Math.random() * (100 - point[0])) + 1;

      return point;
    }

    /**
     * 
     */
    generate() {
      let point = this.randomPoint();
      // console.log(point);

      let props = {};
      props.sand = point[0];
      props.clay = point[1];
      props.slit = 100 - (props.sand + props.clay);

      for (let [key, value] of Object.entries(props)) {
        if (value < 0) {
          value = 0
        }

        value = value.toFixed(0);
        if (value < 10 ){
          value = '0' + value;
        }

        props[key] = value;
      }

      for (let index = 0; index < texturePolygons.length; index++) {
        const polygon = texturePolygons[index];
        if (this.isInside(polygon, point)) {
          // console.log(polygon.name);
          this.name = polygon.name;
          break;
        }
        
      }

      // console.log(props);
      this.props = props;

    }      

    /**
     * Check if point q lies on pr
     * @param {*} p 
     * @param {*} q 
     * @param {*} r 
     * @returns 
     */
    onSegment(p, q, r) {
      if (q[0] <= Math.max(p[0], r[0]) &&
            q[0] >= Math.min(p[0], r[0]) &&
            q[1] <= Math.max(p[1], r[1]) &&
            q[1] >= Math.min(p[1], r[1])) {
            return true;
      }

      return false;
    }


    /**
     * Orientation of ordered triplet p, q, r.
     * @param {*} p 
     * @param {*} q 
     * @param {*} r 
     * @returns 0 if co-linear, 1 if clockwise and 2 if counterclockwise
     */
    orientation(p, q, r) {
      let value = (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
      
      // Co-linear
      if (value == 0) {return 0;}
     
      // Clockvise / Counterclockwise
      return (value > 0) ? 1 : 2;
    }


    /**
     * Check if line p1q1 intersects p2q2
     * @param {*} p1 
     * @param {*} q1 
     * @param {*} p2 
     * @param {*} q2 
     * @returns {Boolean}
     */
    doIntersect(p1, q1, p2, q2){

      let o1 = this.orientation(p1, q1, p2);
      let o2 = this.orientation(p1, q1, q2);
      let o3 = this.orientation(p2, q2, p1);
      let o4 = this.orientation(p2, q2, q1);

      // General Case
      if (o1 != o2 && o3 != o4) {return true;}
      // p1, q1 and p2 are colinear and p2 lies on segment p1q1
      if (o1 == 0 && this.onSegment(p1, p2, q1)){return true;}
      // p1, q1 and p2 are colinear and q2 lies on segment p1q1
      if (o2 == 0 && this.onSegment(p1, q2, q1)){return true;}
      // p2, q2 and p1 are colinear and p1 lies on segment p2q2
      if (o3 == 0 && this.onSegment(p2, p1, q2)){return true;}
      // p2, q2 and q1 are colinear and q1 lies on segment p2q2
      if (o4 == 0 && this.onSegment(p2, q1, q2)){return true;}

      return false;
    }

    /**
     * Check if point is inside a polygon
     * @param {*} polygon 
     * @param {*} point 
     * @returns {Boolean}
     */
    isInside(polygon, point) {
      let extreme = [1000, point[1]];

      let count = 0, i = 0;

      do {
        let next = (i + 1) % polygon.geom.length;

        if (this.doIntersect(polygon.geom[i], polygon.geom[next], point, extreme)) {
          if (this.orientation(polygon.geom[i], point, polygon.geom[next]) == 0) {
            return this.onSegment(polygon.geom[i], point, polygon.geom[next]);
          }

          count++;
        }
        i = next;
      } while (i !== 0);

      return (count % 2 == 1);
    }

}


// ---------------------------------------------------------
//                          Imports 
// ---------------------------------------------------------

// ---------------------------------------------------------
//                          Imports 
// ---------------------------------------------------------

// ---------------------------------------------------------
//                          Imports 
// ---------------------------------------------------------

// ---------------------------------------------------------
//                          Imports 
// ---------------------------------------------------------
export const texturePolygons = [{
  name: 'Heavy Clay',
  geom: [[0, 100], [40, 60], [0, 60]],
},
{
  name: 'Clay',
  geom: [[0, 60], [40, 60], [45, 55], [45, 40], [20, 40]],
},
{
  name: 'Silty Clay',
  geom: [[0, 60], [0, 40], [20, 40]],
},
{
  name: 'Sandy Clay',
  geom: [[45, 55], [45, 35], [65, 35]],
},
{
  name: 'Silty Clay Loam',
  geom: [[0, 40], [0, 28], [20, 28], [20, 40]],
},
{
  name: 'Clay Loam',
  geom: [[20, 40], [20, 28], [45, 28], [45, 40]],
},
{
  name: 'Sandy Clay Loam',
  geom: [[45, 35], [45, 28], [52, 20], [80, 20], [65, 35]],
},
{
  name: 'Silt',
  geom: [[0, 0], [0, 12], [8, 12], [19, 0]],
},
{
  name: 'Silt Loam',
  geom: [[0, 28], [0, 12], [8, 12], [19, 0], [50, 0], [25, 28]],
},
{
  name: 'Loam',
  geom: [[25, 28], [45, 5], [52, 5], [52, 20], [45, 28]],
},
{
  name: 'Sandy Loam',
  geom: [[52, 20], [52, 5], [45, 5], [50, 0], [70, 0], [85, 15], [80, 20]],
},
{
  name: 'Loamy Sand',
  geom: [[70, 0], [85, 15], [90, 10], [83, 0]],
},
{
  name: 'Sand',
  geom: [[90, 10], [83, 0], [100, 0]],
}];