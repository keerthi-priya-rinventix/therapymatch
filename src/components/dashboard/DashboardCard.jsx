const DashboardCard = ({
  title,
  description,
  actionLabel,
  onAction,
}) => (
  <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between">
    <div className="space-y-2">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500">{description}</p>
    </div>

    <Button className="mt-6 w-full" onClick={onAction}>
      {actionLabel}
    </Button>
  </div>
);

export default DashboardCard;