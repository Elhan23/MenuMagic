import progress from '../../assets/images/progress.png';
import './ProgressComponents.scss'

function ProgressComponents() {
  return (
      <div className='progress_style'>
           <div className='progress_img'>
              <img src={progress} alt="progress" />
           </div>

           <div className='progress_text'>
              <h2>Monitor your progress, how many <br /> users view and save your recipes.</h2>
              <div>
                 <p>Track your progress and see how many users are viewing and saving your favorite recipes on our platform.  Improve your profile, add new delicious dishes and share cooking tips to attract even more users. <br /> Join our community today and start sharing your culinary arts with the world!</p>
              </div>
           </div>
      </div>
  )
}

export default ProgressComponents
