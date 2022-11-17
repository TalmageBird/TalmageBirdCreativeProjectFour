import logo from './logo.svg';
import './App.css';

function App() {
    
  return (
    <div>
    <div class='inspirebox'>
  
        <p id='inspiration'><em>If a job is worth doing, then it is worth doing well!</em></p>
    </div>


    <div class='mid'>
        <div class='utah'>
            <h3>Pricing and Service</h3>
            <p>Competitive pricing with various discount opportunities!</p>

            <div class='secicon'>
                <img src='images/dollar.jpg'/>
            </div>
            <a class='linkcolor' href='https://ec2-54-241-209-239.us-west-1.compute.amazonaws.com/Bird-Fence-Staining/pricing.html'>Pricing and Services</a>
        </div>
        <div class='california'>
            <h3>Stain types</h3>
            <p>Customize your stain color, gradient, and brand!</p>
            <div class='secicon'>
                <img src='images/fence1.jpg' width="250"/>
            </div>
            <a class='linkcolor' href='https://ec2-54-241-209-239.us-west-1.compute.amazonaws.com/Bird-Fence-Staining/stains.html'>Stains</a>
        </div>
        <div class="idaho">
            <h3>Reviews</h3>
            <p>Hear what others have to say about our services!</p>
            <div class='secicon'>
                <img src='images/fb.jpg' width="250"/>
            </div>
            <div>
                <a class='linkcolor' href='https://ec2-54-241-209-239.us-west-1.compute.amazonaws.com/Bird-Fence-Staining/reviews.html'>Reviews</a>
            </div>
        </div>
    </div>
     <script text="type/javascript" src="script-inspiration.js">
    </script>
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    
    </div>
  );
}

export default App;
