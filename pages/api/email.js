import nodemailer from "nodemailer";

export default async (req, res) => {
  // const { fullName, email, message } = req.body;

  const message = {
    to: 'hello@gmail.com',
    from: `Tester <test@gmail.com>`,
    subject: 'Some Title',
    html: ` Hi Trust this is my first email sending from node server WTF`,
  }
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
      },
    });
  const response = await transporter.sendMail(message)
  try {
    res.status(200).json(response)
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: 'Something went wrong, please try again later' })
  }

}
