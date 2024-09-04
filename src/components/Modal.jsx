import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2 style={{textAlign:"center"}}>BLOGS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget orci eget risus feugiat sollicitudin. Nullam dignissim eget tellus at convallis. Aliquam at ligula dui. Ut dolor lectus, mollis eu commodo ut, ultricies in nisi. Sed vitae pellentesque nulla, at pretium ex. Vivamus eget aliquam arcu, varius ultricies libero. 
            Morbi sed leo vitae nulla aliquam placerat et vel erat. Vestibulum ut massa imperdiet, varius sem ac, pulvinar elit. Quisque pellentesque nibh non purus malesuada, at ultrices lacus gravida. Sed placerat erat sed venenatis congue. Fusce sodales quam sem, et scelerisque ligula fringilla a. Nulla accumsan quis lacus eu commodo.
             Sed sit amet leo sit amet felis egestas facilisis a sit amet ligula. Aenean a consequat orci. Integer vestibulum augue vel placerat hendrerit.<br/><br/>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget orci eget risus feugiat sollicitudin. Nullam dignissim eget tellus at convallis. Aliquam at ligula dui. Ut dolor lectus, mollis eu commodo ut, ultricies in nisi. Sed vitae pellentesque nulla, at pretium ex. Vivamus eget aliquam arcu, varius ultricies libero. 
            Morbi sed leo vitae nulla aliquam placerat et vel erat. Vestibulum ut massa imperdiet, varius sem ac, pulvinar elit. Quisque pellentesque nibh non purus malesuada, at ultrices lacus gravida. Sed placerat erat sed venenatis congue. Fusce sodales quam sem, et scelerisque ligula fringilla a. Nulla accumsan quis lacus eu commodo.
             Sed sit amet leo sit amet felis egestas facilisis a sit amet ligula. Aenean a consequat orci. Integer vestibulum augue vel placerat hendrerit.<br/><br/>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget orci eget risus feugiat sollicitudin. Nullam dignissim eget tellus at convallis. Aliquam at ligula dui. Ut dolor lectus, mollis eu commodo ut, ultricies in nisi. Sed vitae pellentesque nulla, at pretium ex. Vivamus eget aliquam arcu, varius ultricies libero. 
            Morbi sed leo vitae nulla aliquam placerat et vel erat. Vestibulum ut massa imperdiet, varius sem ac, pulvinar elit. Quisque pellentesque nibh non purus malesuada, at ultrices lacus gravida. Sed placerat erat sed venenatis congue. Fusce sodales quam sem, et scelerisque ligula fringilla a. Nulla accumsan quis lacus eu commodo.
             Sed sit amet leo sit amet felis egestas facilisis a sit amet ligula. Aenean a consequat orci. Integer vestibulum augue vel placerat hendrerit.<br/><br/>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget orci eget risus feugiat sollicitudin. Nullam dignissim eget tellus at convallis. Aliquam at ligula dui. Ut dolor lectus, mollis eu commodo ut, ultricies in nisi. Sed vitae pellentesque nulla, at pretium ex. Vivamus eget aliquam arcu, varius ultricies libero. 
            Morbi sed leo vitae nulla aliquam placerat et vel erat. Vestibulum ut massa imperdiet, varius sem ac, pulvinar elit. Quisque pellentesque nibh non purus malesuada, at ultrices lacus gravida. Sed placerat erat sed venenatis congue. Fusce sodales quam sem, et scelerisque ligula fringilla a. Nulla accumsan quis lacus eu commodo.
             Sed sit amet leo sit amet felis egestas facilisis a sit amet ligula. Aenean a consequat orci. Integer vestibulum augue vel placerat hendrerit.<br/><br/>

</p>
        <button onClick={onClose} >Close</button>
      </div>
    </div>
  );
};

export default Modal;
