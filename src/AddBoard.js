// import React, { Component } from "react";
// import Board from './Board'

 
// class AddBoard extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [],
//       boards: props.list
//     };
 
//     this.addItem = this.addItem.bind(this);
//   }

//   addItem(e) {
//     // const br = new Board();
//     // console.log(br);


//     // pushCard(board) {
//     //   this.setState(update(this.state.items, {
//     //     boards: {
//     //       $push: [ board ]
//     //     }
//     //   }));
//     // }


//     if (this._inputElement.value !== "") {
//       var newItem = {
//         text: this._inputElement.value,
//         key: Date.now()
//       };
   
//       this.setState((prevState) => {
//         return { 
//           items: prevState.items.concat(newItem) 
//         };
//       });
     
//       this._inputElement.value = "";
//     }
     
//     console.log(this.state.items);
       
//     e.preventDefault();
//   }
//   render() {
//     return (
//       <div className="todoListMain">
//         <div className="header">
//           <form onSubmit={this.addItem}>
//           <input ref={(a) => this._inputElement = a} 
//                   placeholder="enter task">
//             </input>
//             <button type="submit">add</button>
//           </form>
//         </div>
//         <Board id={1} list={listOne} />
//       </div>
//     );
//   }
// }
 
// export default AddBoard;