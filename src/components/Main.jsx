import React from 'react';
import {connect} from 'react-redux';

const Main_ = (props) => {
    console.log(props);
    const { name, newMember} = props;
    console.log(newMember === "newMember", 'NEW MEMBER IN MAIN')
    return (
        <div>
          <h1>{name}</h1>
          {newMember === "newMember" ? '-' : <h2>{newMember}</h2>}
        </div>
    )
}

function mapStateToProps(store) {
  const { firstName, lastName } = store.person;
  return {
    name: `${firstName} ${lastName}`,
    newMember: `${store.newPerson.firstName}`
  };
}

// const mapStateToProps = ({ firstName }) => ({ firstName });


export const Main = connect(mapStateToProps)(Main_);

// function Main() {
//   const store = useContext(reduxContext);
//   const state = store.getState();
//   const props = mapStateToProps(state)

//   return <Main_ {...props} dispatch={store.dispatch} />
// }