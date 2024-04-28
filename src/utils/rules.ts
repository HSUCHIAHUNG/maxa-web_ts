interface emailValidate {
  required: boolean;
  validator(value: string | undefined, cb: (error?: string) => void): void;
}

const email: emailValidate[] = [
  {
    required: true,
    validator(value, cb) {
      if (value === "") {
        return cb("必");
      }
      return cb();
    },
  },
];

export { email };

