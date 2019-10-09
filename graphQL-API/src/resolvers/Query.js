const Query = {
  players: (root, args, context, info) => {
    return context.prisma.players();
  },
};

module.exports = {
  Query,
};
