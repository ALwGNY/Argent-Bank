import "./ArticleFeatures.scss"


function ArticleFeatures ({imageFeatures, featuresTitle, featureDescription, imageAlt}) {
  return (
    <div className="feature-item">
      <img src={imageFeatures} alt={imageAlt} className="feature-icon" />
      <h3 className="feature-item-title">{featuresTitle}</h3>
      <p>
        {featureDescription}
      </p>
    </div>
  );
}

export default ArticleFeatures;