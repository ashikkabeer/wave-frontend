'use client';

import { z } from 'zod';


const formSchema = z.object({
  username: z.string().min(2).max(50),
  name: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  collegeName: z.string().min(2).max(50),
  gender: z.any()
});
export default formSchema