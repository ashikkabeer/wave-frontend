'use client';
import formSchema from './schema/signup.schema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className='flex justify-center'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <div>
                <FormItem className='mt-5'>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Name' {...field} />
                  </FormControl>
                  <FormDescription>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <div>
                <FormItem className='mt-5'>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='password' {...field} />
                  </FormControl>
                  <FormDescription>
                    This be displayed to public
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <div>
                <FormItem className='mt-5'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='ashikkabeer03@gmail.com' {...field} />
                  </FormControl>
                  <FormDescription>
                    This wont be displayed to anyone
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />

          {/* ---------------------- */}
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <div>
                <FormItem className='mt-5'>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder='password' {...field} />
                  </FormControl>
                  <FormDescription>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          {/* --------------------- */}
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <div>
                <FormItem className='mt-5'>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup defaultValue='option-one'>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='option-one' id='option-one' />
                        <Label htmlFor='option-one'>Male</Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='option-two' id='option-two' />
                        <Label htmlFor='option-two'>Female</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              </div>
            )}
          />

          {/* --------------- */}

          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <div>
                <FormItem className='mt-5'>
                  {/* <FormLabel>Gender</FormLabel> */}
                  <FormControl>
                    <Select>
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='College' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='light'>
                          Musaliar College of Engineering and Technology
                        </SelectItem>
                        <SelectItem value='dark'>TKM</SelectItem>
                        <SelectItem value='system'>CET</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />

          {/* ----------- */}

          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
}
