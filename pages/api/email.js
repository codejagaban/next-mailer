import nodemailer from "nodemailer";

export default async (req, res) => {
  // const { fullName, email, message } = req.body;

  const message = {
    to: 'okpusjamin@gmail.com',
    from: `Trustie <trustjamin@gmail.com>`,
    subject: 'Changed Title',
    html: ` Hi Trust this is my first email sending from node server WTF`,
  }
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
      },
      debug: true, // show debug output
      logger: true // log information in console
    });
  let response = await transporter.sendMail(message);
  try {
        res.status(200).json(response)
  } catch (error) {
          console.log({ error });
      res.status(500).json({ msg: 'Something went wrong, please try again later' })
  }
  //   .then(response => {
  //     console.log(response);
  //   res.status(200).json(response)
  //   })
  //   .catch(err => {
  //     console.log({ err });
  //     res.status(500).json({ msg: 'Something went wrong, please try again later' })
  // })
}
