export default class MyPage extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    // Set delay in milliseconds
    window.pageExitTime = 1000
  }
  render() {
    // A "status" property will be added
    // You can use this to set classes, or trigger animations however you want
    return (
      <section className={this.props.status}>
        Animation status: {this.props.status}
      </section>
    )
  }
}