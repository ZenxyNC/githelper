import './indicatorGuide.css'

export default function IndicatorGuide() {
  return (
    <>
      <div id="indicatorGuide-maidiv">
        2025 @ ZenTech. All rights reserved.
        <div className='divider'></div>
        <h1>Indicators Guide</h1>

        {/*Incomplete required input*/}
        <div className='indicator-guide-item'>
          <div className='indicator-guide-item-indicator indicator-incomplete'></div>
          Incomplete required input
        </div>
        
        {/*Need to be done*/}
        <div className='indicator-guide-item'>
          <div className='indicator-guide-item-indicator indicator-needtodo'></div>
          Need to be done
        </div>

        {/*Done*/}
        <div className='indicator-guide-item'>
          <div className='indicator-guide-item-indicator indicator-done'></div>
          Done
        </div>
      </div>
    </>
  );
}