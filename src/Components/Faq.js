import React from 'react'
import { Accordion, Row , Col , Container } from 'react-bootstrap'

const Faq = () => {
  return (
    <div className="margin-div">
      <Container>
            <Row>
              <Col md={6}>
               <h2>OUR <span className='head'>POLICY </span></h2>
               <Accordion className='faq-text'>
  <Accordion.Item eventKey="0">
    <Accordion.Header>OUR SERVICE GURANTEE</Accordion.Header>
    <Accordion.Body>
      At GOLDEN HONEY , We prioritize your satisfaction and<br/>
      our expertise. Your positive experience is<br/> paramount and in the event you are not<br/> completely satisfied, please advise us at the<br/> time of your service. Alternatively, you can<br/> reach out to us on Whatsapp within 24 hours <br/>of your service.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>RESCHEDULE</Accordion.Header>
    <Accordion.Body>
    At GOLDEN HONEY, we pride on our flexibility. Please<br/> reach out to us on Whatsapp should you wish<br/> to change the time and date of your service.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="4">
    <Accordion.Header>PRIVACY</Accordion.Header>
    <Accordion.Body>
    <p>Golden Honey is committed to respecting the privacy rights of our customers, visitors, and other users of our services provided via our website and/or call centre. We are committed to fair information practices and the protection of privacy. This Privacy Policy is only applicable to our site, and not to any other websites that you may be able to access from our site, including our partners' sites, each of which may have data collection, storage, and use practices and policies that may differ significantly from this Privacy Policy. Your use of the site is governed by this Privacy Policy and the Terms of Use.
Data Collected
During the course of our services, we may collect following information
Traffic Data: Following categories of information is tracked and captured when you visit our Website:
IP addresses;
domain servers;
types of computers accessing the Website;
types of web browsers used to access the Website;
referring source which may have sent you to the Website; and
Other information associated with the interaction of your browser and the Website.</p>
    
    <p>This information is used for statistical reasons and not stored with your personal information.
Personal Information : In order for you to use certain features of the site, such as booking an appointment, we require you to register, which contains your personal information such as your e-mail address, phone number, name, date of birth, etc. We share this information with the Healthcare provider to help the healthcare provider maintain a history against the patient profile that helps in the future diagnosis and treatment of the patient's health concerns.
Medical Data: Any medical data, such as your reason for visit, your date of visit, and other medical information you choose to share with us, is shared with the healthcare provider to help in the diagnosis and treatment of the health issue.
Transactional Data: All transactional data, such as searches for healthcare provider, your appointments, number of visits, any diagnosis, prescriptions, etc is used to ensure a better service.
Cookie Data: Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow it) that enables the sites or service providers' systems to recognize your browser and capture and remember certain information. We use cookies to help us understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. If you prefer, you can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings. Like most websites, if you turn your cookies off, some of our services may not function properly. However, you can still book appointments over the telephone by calling.
Web Analytics: We may use third party web analytics services to track and analyse your interaction with the site, such as mouse clicks, mouse movements, scrolling activity as well as any text that you choose to type into the Website. These analytics services do not collect Personal Information that you do not voluntarily enter the site. We use this information to enhance your experience.
Use of Your Information
We use your contact information primarily to contact you when necessary,including to remind you of upcoming or follow-up appointments. In certain cases we may use your contact information to send you information about any new or relevant services. We may also use your demographic data, your traffic data, or your medical data to customize and tailor your experience on the site, and for usage of medical service through your chosen healthcare provider. You agree that we may use your personal information to allow your chosen healthcare providers to make appointments with other healthcare provider on your behalf through our services.
Confidentiality and Security</p>
    <p>Except as otherwise provided in this Privacy Policy, we will keep your personal information private and will not share it with third parties, unless we believe in good faith that disclosure of your personal information or any other information, we collect about you is necessary to:
comply with a court order or other legal process.
protect the rights, property or safety of Golden Honey or another party;
enforce our Terms of User.
Respond to claims that any posting or other content violates the rights of third parties.
Public Information
Any information that you may reveal in a review posting or other online discussion or forum is intentionally open to the public and is not in any way private. You should think carefully before disclosing any personally identifiable information in any public forum. What you have written may be seen and/or collected by third parties and may be used by others in ways we are unable to control or predict.</p>
    </Accordion.Body>

  </Accordion.Item>
</Accordion>
              </Col>

              <Col md={6}>
              <h2>FAQ</h2>

              <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>HOW DO I SCHEDULE AN APPOINTMENT </Accordion.Header>
    <Accordion.Body>
     Simply click on whatsapp icon or click on book now. Minimum booking amount should be 699
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>WHAT ARE THE OPERATING HOURS?</Accordion.Header>
    <Accordion.Body>
    Monday to Sunday from 9:00 am to 8:00 pm
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>WHAT CAN I EXPECT FROM THE BEAUTICIAN DURING THE HOME VISIT?</Accordion.Header>
    <Accordion.Body>
    Your GOLDEN HONEY beautician will consult with you prior to the service to understand your preferences and would make recommendations if you like.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>HOW DO I PAY FOR THE HOME SERVICE?</Accordion.Header>
    <Accordion.Body>
    Payment can be made via the following options: Cash on the Service day, Paytm, Phone Pay, Google Pay, bank transfer. We also provide debit card services post your Service but for this please advice at time of appointment booking and we will ensure the card reader is with our beauticians when they visit you.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>WHAT ARE THE SERVICES OFFERED BY GOLDEN HONEY?</Accordion.Header>
    <Accordion.Body>
    We offer a suite of beauty services including Facials, Waxing's, Bridal Make up, Engagement/Party Make up, Hair Spa, Hair Straightening, Keratin Treatment, manicures, pedicures & threadings.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
              </Col>
            </Row>

      </Container>
    </div>
  )
}

export default Faq