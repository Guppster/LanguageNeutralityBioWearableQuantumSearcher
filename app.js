import { list of Components } from 'native-base';
import { Container, Content, Text } from 'native-base';

<Header searchBar rounded>                            
    <InputGroup>                        

    <Icon name="ios-search" />                        

    <Input placeholder="Search" value={this.state.search}  onChangeText={(text) => this.setState({search:text})} onSubmitEditing={()=>this.search()}/>                    

    </InputGroup>                    

    <Button transparent onPress={()=>this.search()}>Go</Button>                
    </Header>

search()
{
    // Set loading to true when the search starts to display a Spinner
    this.setState({loading: true});

    var that = this;

    return fetch('https://api.github.com/search/repositories?q='+this.state.search)
        .then((response) => response.json())
        .then((responseJson) => 
            {
                that.setState({
                    results: responseJson,
                    loading: false
                });
                return responseJson.Search;
            })
            .catch((error) => 
                {
                    that.setState({loading: false});
                    console.error(error);
                });
}
