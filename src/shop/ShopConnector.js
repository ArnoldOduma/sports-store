import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";

const mapStateProps = (dataStore) => ({
    ...dataStore
});

const mapDispatchProps = {
    loadData
}

const filterProducts = (products = [], category) =>
    (!category || category === 'All')
        ? products
        : products.filter(product => product.category.toLowerCase() === category.toLowerCase());


export const ShopConnector = connect(mapStateProps, mapDispatchProps)(
    class extends React.Component {
        render() {
            return (
                <Switch>
                    <Route path="/shop/products/:category?"
                        render={(routeProps) =>
                            <Shop {...this.props} {...routeProps}
                                products={filterProducts(this.props.products, routeProps.match.params.category)} />
                        }
                    />
                    <Redirect to="/shop/products" />
                </Switch>
            )
        }

        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES);
            this.props.loadData(DataTypes.PRODUCTS)
        }
    }
)