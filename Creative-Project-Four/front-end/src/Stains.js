import logo from './logo.svg';
import './App.css';

function Stains() {
  return (
      <div>
   <div class='firstoption'>
        <div>
            <p></p>

        </div>
    </div>
    
   
    
    
    <div class='mid'>
        <div class='utah'> 
        <h3 class='tom'>Transparent</h3>
        <p class='chicken'>Transparent is clear or slightly tinted and lasts for about a year in moderate sun and element exposure.</p>
        
       <div class='secicon'>
        <img src='images/clear.jpg' width="350"/>
       </div>
        <a class='linkcolor' href='https://www.behr.com/consumer/colors/wood-stain/explore/transparent'>Behr Transparent Stains</a>
        </div>
        <div class='california'>
            <h3 class='tom'>Semi-transparent</h3>
            <p class='chicken'>Semi-transparent includes more coloration than transparent and lasts about 2-3 years.</p>
            <div class='secicon'>
            <img src='images/semi.jpg' width="350"/>
            </div>
            <a class='linkcolor' href='https://www.behr.com/consumer/colors/wood-stain/explore/semi-transparent'>Behr Semi-transparent Stains</a>
        </div>
        <div class="idaho">
            <h3 class='tom'>Solid</h3>
            <p class='chicken'>Solid is by far the longest lasting stain and will protect your fence for well over 5 years!</p>
            <div class='secicon'>
            <img src='images/solid.jpg' width="350"/>
            </div>
            <div>
            <a class='linkcolor' href='https://www.behr.com/consumer/colors/wood-stain/explore/solid-color'>Solid Stains</a>
            </div>
        </div>
    </div>
    </div>
    
    
  );
}

export default Stains;
