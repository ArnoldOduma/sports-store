import React from "react";
import { ToggleLink } from "../ToggleLink";

export class CategoryNavigation extends React.Component {
    render() {
        return <React.Fragment>
            <ToggleLink to={this.props.baseUrl} exact={true}>All</ToggleLink>
            {this.props.categories && this.props.categories.map(cat =>
                <ToggleLink key={cat}
                    to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>{cat}
                </ToggleLink>
            )}
            {/* <Link className="btn btn-secondary btn-block" to={this.props.baseUrl}>All</Link>
            {this.props.categories && this.props.categories.map(cat =>
                <Link className="btn btn-secondary btn-block" key={cat}
                    to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>
                    {cat}
                </Link>
            )} */}
        </React.Fragment>
    }

}