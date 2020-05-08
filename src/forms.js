export const loginFormFields = [
  {
    label: 'Email',
    name: 'email',
    placeholder: 'gearboard123@gmail.com',
    required: true,
  },
  {
    label: 'Password',
    name: 'password',
    required: true,
  },
];

export const registrationFormFields = [
  {
    label: 'First Name',
    name: 'first_name',
    placeholder: 'Johnny Doe',
    required: true,
  },
  {
    label: 'Email',
    name: 'email',
    placeholder: 'gearboard123@gmail.com',
    required: true,
  },
  {
    label: 'Password',
    name: 'password',
    required: true,
  },
  {
    label: 'Confirm Password',
    name: 're-password',
    required: true,
  },
];

export const newGearFormFields = [
  {
    label: 'Gear Name',
    name: 'gear_name',
    placeholder: 'Gibson Les Paul',
    required: true,
  },
  {
    label: 'Description',
    name: 'description',
    placeholder: 'Something something',
    required: true,
    type: 'textarea'
  },
  {
    label: 'Comment',
    name: 'comment',
    required: true,
    type: 'textarea'
  },
];

export const editGearFormFields = [
  {
    label: 'Gear Name',
    name: 'gear_name',
    placeholder: '',
    required: true, 
  }, 
  {
    label: 'Description',
    name: 'description',
    placeholder: 'Something something',
    type: 'textarea'
  },
  {
    label: 'Comment',
    name: 'comment',
    type: 'textarea'
  }
]
