import { Accordion, Button, Container, Grid, Header, Icon, Segment, Step } from "semantic-ui-react"
import PageProps from "../../interfaces/page"
import { useState } from "react"

export const Help: React.FunctionComponent<PageProps> = props => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeIndexFAQ, setActiveIndexFAQ] = useState<number>(-1);

  const handleAccordionClick = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(0)
      if (index === 5) setActiveIndexFAQ(-1)
    }
    else setActiveIndex(index);
  };

  const handleFAQClick = (index: number) => {
    setActiveIndexFAQ(index === activeIndexFAQ ? -1 : index);
  };

  const faqs = [
    {
      question: 'What is your return policy?',
      answer:
        'Our return policy allows customers to return items within 30 days of purchase. The item must be unused and in its original packaging.',
    },
    {
      question: 'How can I track my order?',
      answer:
        'You can track your order by visiting our website and entering your order number in the tracking section.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we offer international shipping. Shipping rates and delivery times vary depending on the destination.',
    },
  ];

  return (
    <>
    <Segment textAlign="center">
      <Header as='h1' icon>
        <Icon name='microphone' color='blue' />
        <Header.Content>Let's have a talk</Header.Content>
        <Header.Subheader>Tell us how we can help you and let's work together.</Header.Subheader>
      </Header>
      <Grid columns={3} stretched centered padded>
        <Grid.Row>
          <Grid.Column>
            <Accordion styled>
              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={() => handleAccordionClick(1)}>
                <Header icon textAlign='center'>
                  <Icon name='info' color='blue' />
                  <Header.Content>Product info and service</Header.Content>
                </Header>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <Header as='h4' textAlign="center">We're available for a conversation:</Header>
                <Grid columns={3}>
                  <Grid.Column>
                    <Segment tertiary basic color='red'>
                      <Header textAlign="center" icon as='h4'><Icon name='phone' />Phone us<Header.Subheader content='(123) 456-7890 ex. 1' /></Header>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment tertiary basic color='blue'>
                      <Header textAlign="center" icon as='h4'><Icon name='comment' />Start a text chat<Header.Subheader content='Just click here!' /></Header>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment tertiary basic color='green'>
                      <Header textAlign="center" icon as='h4'><Icon name='mail' />Email us<Header.Subheader content='prod@buildmaster.com' /></Header>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Accordion.Content>
            </Accordion>
          </Grid.Column>
          <Grid.Column>
            <Accordion styled>
                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={() => handleAccordionClick(2)}>
                  <Header icon textAlign='center'>
                    <Icon name='location arrow' color='violet' />
                    <Header.Content>Order tracking</Header.Content>
                  </Header>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <Segment basic color='violet'>Need to track an item? Just sign in and take a look through your order history:</Segment>
                  <Segment basic><Button fluid color='blue' content='Log in' /></Segment>
                </Accordion.Content>
              </Accordion>
          </Grid.Column>
          <Grid.Column>
            <Accordion styled>
                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={() => handleAccordionClick(3)}>
                  <Header icon textAlign="center">
                    <Icon name='redo' color='yellow' />
                    <Header.Content>Return an item</Header.Content>
                  </Header>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <Segment basic color='yellow'>Need to return an item? Just sign in and take a look through your order history:</Segment>
                  <Segment basic><Button fluid color='blue' content='Log in' /></Segment>
                </Accordion.Content>
              </Accordion>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Accordion styled>
              <Accordion.Title
                active={activeIndex === 4}
                index={4}
                onClick={() => handleAccordionClick(4)}>
                <Header icon textAlign="center">
                  <Icon name='credit card' color='green' />
                  <Header.Content>Payment help</Header.Content>
                </Header>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 4}>
                <Segment basic color='green'>Just tell us what we can help with</Segment>
                <Step.Group widths={3}>
                    <Step>
                      <Icon name='info circle' color='blue' />
                      <Step.Content>
                        <Step.Title>Information</Step.Title>
                      </Step.Content>
                    </Step>
                    <Step>
                      <Icon name='payment' color='green' />
                      <Step.Content>
                        <Step.Title>Payment</Step.Title>
                      </Step.Content>
                    </Step>
                    <Step>
                      <Icon name='file outline' color='orange' />
                      <Step.Content>
                        <Step.Title>Billing</Step.Title>
                      </Step.Content>
                    </Step>
                  </Step.Group>
                </Accordion.Content>
              </Accordion>
          </Grid.Column>
          <Grid.Column>
            <Accordion styled>
                <Accordion.Title
                active={activeIndex === 5}
                index={5}
                onClick={() => handleAccordionClick(5)}>
                  <Header icon textAlign="center">
                    <Icon name='question' color='pink' />
                    <Header.Content>Frequently asked questions</Header.Content>
                  </Header>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 5}>
                  <Segment basic color="pink">
                    <Accordion fluid styled>
                      {faqs.map((faq, activeIndexFAQ) => (
                        <>
                          <Accordion.Title
                            active={activeIndex === activeIndexFAQ}
                            index={activeIndexFAQ}
                            onClick={() => handleFAQClick(activeIndexFAQ)}
                          >
                            <Icon name="dropdown" />
                            {faq.question}
                          </Accordion.Title>
                          <Accordion.Content active={activeIndex === activeIndexFAQ}>
                            {faq.answer}
                          </Accordion.Content>
                        </>
                      ))}
                    </Accordion>
                  </Segment>
                </Accordion.Content>
              </Accordion>
          </Grid.Column>
          <Grid.Column>
            <Accordion styled>
                <Accordion.Title
                  active={activeIndex === 6}
                  index={6}
                  onClick={() => handleAccordionClick(6)}>
                  <Header icon textAlign="center">
                    <Icon name='question circle' color='purple' />
                    <Header.Content>Other</Header.Content>
                  </Header>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 6}>
                  <p>Dummy content for order tracking.</p>
                </Accordion.Content>
              </Accordion>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <footer>
      <Container text textAlign="center">We offer contact through phone email and text chat.<br/>
      <small>
        Phone: 123 456 7890<br/>
        Email: support@buildmaster.com
      </small></Container>
    </footer>
    </>
  )
}
