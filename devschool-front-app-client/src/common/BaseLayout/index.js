import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';

import style from './BaseLayout.scss';
import NavbarPanel from './../Navbar';
import connect from "react-redux/es/connect/connect";

class BaseLayout extends Component {

    render() {
        return (
            <DocumentTitle title={'DEVOPS School'}>
                <div>
                    <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css" />
                    <NavbarPanel/>
                    <div className={style.baseWrap}>
                        {this.props.children}
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

BaseLayout.propTypes = {

};

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps)(BaseLayout);