import PageProps from "../../interfaces/page"

export const Help: React.FunctionComponent<PageProps> = props => {
  return (
    <div>
      <div style={{ background: '#6b8cc7', padding: '20px', textAlign: 'center' }}>
        <h2>How can we help you</h2>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: '20px', textAlign: 'center', alignItems: 'center', justifyContent: 'center', paddingTop: '100px' }} >
        <div style={{ background: '#7ca3eb', width: '30%', height: '100px', margin: '10px', padding: '25px', paddingTop: "30px" }}><h2 >Product info and service</h2></div>
        <div style={{ background: '#7ca3eb', width: '30%', height: '100px', margin: '10px', padding: '25px', paddingTop: "30px" }}><h2 >Order Tracking</h2></div>
        <div style={{ background: '#7ca3eb', width: '30%', height: '100px', margin: '10px', padding: '25px', paddingTop: "30px" }}><h2 >Return an item</h2></div> 
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '20px', textAlign: 'center', alignItems: 'center', justifyContent: 'center', paddingTop: '100px' }} >
        <div style={{ background: '#7ca3eb', width: '30%', height: '100px', margin: '10px', padding: '25px', paddingTop: "30px" }}><h2 >Payment Help</h2></div>
        <div style={{ background: '#7ca3eb', width: '30%', height: '100px', margin: '10px', padding: '25px', paddingTop: "30px" }}><h2 >Frequently asked questions</h2></div>
        <div style={{ background: '#7ca3eb', width: '30%', height: '100px', margin: '10px', padding: '25px', paddingTop: "30px" }}><h2 >Other</h2></div>
      </div>
      <div style={{ background: '#6b8cc7', display: 'flex', textAlign: 'center', position: 'fixed', bottom: 0 }}>
        <div style={{ background: '#6b8cc7', width: '100%', height: '100px', padding:'40px', position: 'fixed', bottom: 0 }}><h2>Contact Info: 123-456-8790</h2></div>
      </div>
    </div>
  )
}
