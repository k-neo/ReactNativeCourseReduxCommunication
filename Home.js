import React, {Component} from 'react';
import { Container, View, Header, Left, Body, Right, Button, Content, Title, Text } from 'native-base';
import { connect } from 'react-redux';
import { fetchMessages } from './redux/actions';

export class HomeContainer extends Component {
  constructor(props) {
      super(props);
  }

  getPrefecture = () => {
    this.props.fetchMessages()
  }

  displayResponse = response => {
     if (!response) {
      return "";
    }
    return response.join();
  }

  render() {
  const props = this.props;
      return (
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>メイン</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <View style={{display: 'flex', alignItems: 'center'}}>
              <View style={{justifyContent: 'center'}}><Text>{this.displayResponse(this.props.response)}</Text></View>
              <Button small block transparent primary onPress={this.getPrefecture}>
                <Text>都道府県を取得</Text>
              </Button>
            </View>
          </Content>
        </Container>
      );
  }
}

const mapStateToProps = state => ({
  response: state.reducer.response,
});
  
const mapDispatchToProps = {
  fetchMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
