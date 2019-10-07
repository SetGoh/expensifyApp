import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return(
        <div>
            Editando a despesa com id de {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;