import React from 'react'

const WorkItems = ({ item }) => {
  const isPlaceholder = item.github.startsWith("#");

  return (
    <div className="work__card" key={item.id}>
        <h3 className="work__title">{item.title}</h3>
        <div className="work__tags">
          {item.tags.map((tag) => (
            <span className="work__tag" key={tag}>{tag}</span>
          ))}
        </div>
        <p className="work__description">{item.description}</p>
        {isPlaceholder ? (
          <span className="work__button work__button--disabled">
            GitHub (coming soon) <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </span>
        ) : (
          <a href={item.github} target="_blank" className="work__button" rel="noreferrer">
            {item.github.includes("figma.com") ? "View on Figma" : "View on GitHub"}{" "}
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}
    </div>
  )
}

export default WorkItems
