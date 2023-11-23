import './Home.scss'
import IconChat from '../../assets/icon-chat.png'
import IconMoney from '../../assets/icon-money.png'
import IconSecurity from '../../assets/icon-security.png'
import ArticleFeatures from '../../components/ArticleFeatures/ArticleFeatures.jsx'


function Home(){

    return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className='features'>
        <ArticleFeatures
        imageFeatures={IconChat}
        imageAlt="Chat Icon"
        featuresTitle="You are our #1 priority"
        featureDescription="Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes."
        />
        <ArticleFeatures
        imageFeatures={IconMoney}
        imageAlt="Money Icon"
        featuresTitle="More savings means higher rates"
        featureDescription="The more you save with us, the higher your interest rate will be!."
        />
        <ArticleFeatures
        imageFeatures={IconSecurity}
        imageAlt="Security Icon"
        featuresTitle="Security you can trust"
        featureDescription="We use top of the line encryption to make sure your data and money
        is always safe."
        />
    </section>
    </main>
    )
}

export default Home
