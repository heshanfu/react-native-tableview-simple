import React, { Component, StyleSheet, View, Text } from 'react-native';

export default class Section extends Component {
  render() {
    const {children} = this.props;
    const header = this.props.header || '';
    const footer = this.props.footer || '';
    /**
     * Render Cell and add Border
     * @param  {Cell} child [description]
     * @param  {Int} index [description]
     * @return {View}       [description]
     */
    let renderChild = (child, index) => {
      if(children.length > 0 && index < children.length - 1) {
        return(
          <View>
            {child}
            <View style={styles.cellhr}>
              <View style={styles.cellhr_inner}></View>
            </View>
          </View>
        )
      }
      return child;
    }
    return(
      <View style={styles.section}>
        <Text style={styles.sectionheader}>{header.toUpperCase()}</Text>
          {React.Children.map(children, renderChild)}
        <Text style={styles.sectionfooter}>{footer.toUpperCase()}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  'section': {
    backgroundColor: '#EFEFF4'
  },
  'sectionheader': {
    fontSize: 13,
    color: '#6d6d72',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 25,
    paddingBottom: 5,
  },
  'sectionfooter': {
    fontSize: 13,
    color: '#6d6d72',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  'cellhr': {
    backgroundColor: '#fff',
  },
  'cellhr_inner': {
    marginLeft: 15,
    marginRight: 15,
    height: 0.5,
    backgroundColor: '#c8c7cc',
  },
});