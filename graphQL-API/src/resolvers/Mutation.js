const Mutation = {
  createPlayer: (root, args, context, info) => {
    return context.prisma.createPlayer({
      ...args,
    });
  },
};

module.exports = {
  Mutation,
};
