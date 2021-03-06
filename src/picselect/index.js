import React from "react"
import './index.css'

class Picselect extends React.Component{
        state = {
            checks: [false, false, false],
            count:0,
            datalist: [
                {
                    id: '1',
                    name: 'foo',
                    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
                },
                {
                    id: '2',
                    name: 'foo',
                    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
                },
                {
                    id: '3',
                    name: 'foo',
                    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
                }
            ]
        }
    
    

    render() {
        return (
            <div>
                <label className="label">
                    <input type="checkbox" className="css-checkbox" ref="myAllCheck"
                            checked={this.state.checks.every(item => item)?"checked":""}
                            onChange={this.handleAllChange} />
                    <span className="css-span"></span>
                   <span>选中了{this.state.count}个</span>
                   
                </label>

                <div className="contain">
                    
                    {
                        this.state.datalist.map((item, index) => {
                            return <div key={item.id}>
                                <div className="item" url={item.url} >
                                    <label className="css-label">
                                        <input type="checkbox" className={`css-checkbox ${index}`}
                                           checked={this.state.checks[index]?"checked":""}
                                            onChange={(e) => {this.handleItemChange(e) }} />
                                            
                                        <span className="css-span"></span>
                                  
                                    </label>
                                    <img src={item.url} alt={item.name}/>
                                    </div>
                                </div>
                            
                        })
                    }
                </div>

            </div>

        );
    }
    handleAllChange=()=>{
        let newChecks = this.state.checks;
        newChecks.fill(this.refs.myAllCheck.checked);
      this.setState({
            checks: newChecks,
            count:this.state.checks.filter(item=>item).length
        });

    }

    handleItemChange = (e) => {
        let target = e.target.className.substr(-1);
        let newChecks = this.state.checks;
        newChecks[target] = e.target.checked;
        this.setState({
            checks: newChecks,
            count:this.state.checks.filter(item=>item).length
        });
    }

}
export default Picselect