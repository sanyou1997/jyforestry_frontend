
import React, { Component } from 'react';
import axios from 'axios';
import { Breadcrumb, BreadcrumbItem,
  Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Upload extends Component {

  constructor(props) {
    super(props);

    this.state = {
        coverType:'请输入数据',
        elevation: '',
        aspect: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
  }

  handleSubmit(event) {
      let form_data = new FormData();
      form_data.append('elevation', this.state.elevation);
      form_data.append('aspect', this.state.aspect);
      let url = 'http://127.0.0.1:8000/';
      axios.post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
        this.setState({
          coverType:res.data,
          });
        console.log(res.data);
        console.log('Current State is: ' + JSON.stringify(this.state));
        })
      .catch(err => console.log(err));
      event.preventDefault();
  }
  

  render() {
    return (
      <div className="row row-content">
                   <div className="col-12">
                      <h3>输入数据获得预测树木类型</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="elevation" md={1}>Elevation</Label>
                                <Col md={5}>
                                    <Input type="text" id="elevation" name="elevation"
                                        placeholder="Elevation"
                                        value={this.state.elevation}
                                        onChange={this.handleInputChange} />
                                </Col>
                                <Label htmlFor="aspect" md={1}>Aspect</Label>
                                <Col md={5}>
                                    <Input type="text" id="aspect" name="aspect"
                                        placeholder="Aspect"
                                        value={this.state.aspect}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            
                            <FormGroup row>
                                <Col md={{size: 10, offset: 1}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                            <span>预测类型：{this.state.coverType}</span>
                        </Form>
                    </div>
                    
               </div>
    );
  }
}

export default Upload;