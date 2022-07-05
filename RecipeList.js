import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css'

class RecipeList extends Component{
    static defaultProps = {
        recipes: [
            {
                title: "Maggi",
                instructions: "Boil water, Add maggi masala, Add Maggi, Boil untill cook.",
                ingredients: ["Maggi", "water"],
                img:"pasta.png"
            },
            {
                title: "Banana Milkshake",
                instructions: "Add banana and milk in the blender, Blend it.",
                ingredients: ["Banana", "Milk"],
                img:"PeanutButter.png"
            },
            {
                title: "Peanut Butter jelly bread",
                instructions: "Apply peanut butter on the bread, Apply jelly oon the other bread.",
                ingredients: ["Peanut butter", "jelly", "bread"],
                img:"banana.png"
            }
        ]
    }

    static propTypes =  {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render(){
        const recipes = this.props.recipes.map((r,index) => (
            <Recipe key={index} {...r} />
        ))
        
        return(
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;
