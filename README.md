# Whereabouts Meteor

This is a basic front-end for the [whereabouts-syslog-tail](https://github.com/barisbalic/whereabouts-syslog-tail).  It depends entirely on that being in place and persisting to a mongodb database.

For support/questions, join the general conversation channel at [![Gitter](https://badges.gitter.im/barisbalic/whereabouts-syslog-tail.png)](https://gitter.im/barisbalic/whereabouts-syslog-tail)

## Installation

You will need to install [Meteor](https://www.meteor.com/) on the target machine.  Once that is in place move the source code onto that machine by whatever means you prefer.  You can then use the sample upstart script found in `/config` or write your own to get the front-end running.

You will need to set the MONGO_URL in any case, the default sample expects it to be running on the same machine.


### Running Manually

Once the Meteor and the code are in place you can execute the following command to run it manually.

```bash
MONGO_URL=mongodb://addressformongoinstancehere/whereabouts meteor
```

## Contributing

Contributions are very welcome!
Quick guide to contributing:

1. Fork the repo.
2. Create your branch `git checkout -b branch-name` **bonus for feature branches**.
3. Make your changes.
4. Test to make sure you have not broken any existing functionality.
5. Commit your changes.
6. Push to your branch.
7. Submit a pull request.

I will do my best to merge your PR or provide feedback as soon as possible!