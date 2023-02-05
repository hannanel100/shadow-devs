import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const getRequestParams = (email: string) => {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DATACENTER = process.env.MAILCHIMP_API_KEY?.split("-")[1];
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
  const data = {
    email_address: email,
    status: "subscribed",
  };
  const headers = {
    Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString(
      "base64"
    )}`,
    "Content-Type": "application/json",
  };
  return { url, data, headers };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;
  console.log(email);
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  // use mailchimp to add email to list
  try {
    const { url, data, headers } = getRequestParams(email);
    const response = await axios.post(url, data, { headers });
    return res.status(201).json({ error: "" });
    //   TODO: properly type error
  } catch (error: any) {
    if (error.response.data.title === "Member Exists") {
      return res.status(400).json({ error: "You are already subscribed" });
    } else if (error.response.data.title === "Invalid Resource") {
      return res.status(400).json({ error: "Please enter a valid email" });
    }
    return res
      .status(400)
      .json({ error: "Something went wrong, please try again...." });
  }
}
